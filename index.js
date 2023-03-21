//constants
const similarJobs = Array.from(document.querySelectorAll(".similarJob-0-2-766"));
const countries = ["peru", "colombia", "chile", "mexico"];

//utils
const getCountry = (text) => {
  let curCountry = countries.find((country) => text.includes(country));
  return curCountry || "pais no encontrado";
};

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if ((areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false;
    }
  }
  return true;
}

function isObject(object) {
  return object != null && typeof object === "object";
}

//Not filtered
const Ads = similarJobs.map((el) => {
  const currentAd = el.querySelector("a[id*='vacante_similar']").innerText.toLowerCase();
  const currentSalary = el
    .querySelector("p[id*='vacante_similar_salario']")
    .innerText.toLowerCase();
  const currentCountry = getCountry(currentAd);

  return {
    pais: currentCountry,
    rangoSalarial: currentSalary,
    aviso: currentAd,
  };
});

console.info("Not Filtered");
console.table(Ads);

// constant salaries
const salaries = [...new Set(Ads.map((item) => item.rangoSalarial))];

//duplicates
const findDuplicates = (advertisments) => {
  let duplicate = [];
  
  const filteredAds = advertisments.reduce((filteredArray, currentEl) => {
    const obj = filteredArray.find(
      (item) =>
      item.pais === currentEl.pais &&
      item.rangoSalarial === currentEl.rangoSalarial &&
      item.aviso === currentEl.aviso
      );
      
      if (obj !== undefined) {
        duplicate.push(obj);
      }
      
      let newCurrentEl;
      if (obj === undefined) {
        newCurrentEl = {
          pais: currentEl.pais,
          rangoSalarial: currentEl.rangoSalarial,
          cantidad: 1,
          aviso: currentEl.aviso,
        };
      }
      
      return obj ? filteredArray : filteredArray.concat(newCurrentEl);
    }, []);
    
  duplicate.map((item) => {
    filteredAds.forEach((job) => {
      if (deepEqual(item, job)) job.cantidad += 1;
    });
  });
  
  return filteredAds;
};

//Filtered (no duplicates)
const uniqueJobs = findDuplicates(Ads);
console.info("Filtered without duplicates");
console.table(uniqueJobs);


//Country
const filterByCountry = (countries, avisos) => {
  const filteredAds = countries.map((country) => avisos.filter((el) => el.pais === country));

  return filteredAds.flat().sort((a, b) => a.pais.localeCompare(b.pais));
};

const filteredByCountry = filterByCountry(countries, uniqueJobs);
console.info("Filtered By Country (Alphabetically)");
console.table(filteredByCountry);

//Salary
const filterBySalary = (salaries, avisos) => {
  const regex = /\$(\d{1,3}(,\d{3})*)(?:\D+\$(\d{1,3}(,\d{3})*))?/;
  
  const validSalaries = [];
  const unNumeredSalaries = [];
  
  salaries.forEach((salary) => {
    const matches = salary.match(regex);
    if (matches) {
      const firstNumber = Number(matches[1].replace(/,/g, ""));
      const secondNumber = matches[3] ? Number(matches[3].replace(/,/g, "")) : null;
      validSalaries.push({ min: firstNumber, max: secondNumber });
    }
  });

  const filteredJobs = avisos.filter((job) => {
    if (job.rangoSalarial === "salario no mostrado") {
      unNumeredSalaries.push(job);
      return false;
    }
    
    const matches = job.rangoSalarial.match(regex);
    if (!matches) {
      unNumeredSalaries.push(job);
      return false;
    }
    
    const firstNumber = Number(matches[1].replace(/,/g, ""));
    const secondNumber = matches[3] ? Number(matches[3].replace(/,/g, "")) : null;
    
    for (const salary of validSalaries) {
      if (secondNumber) {
        if (firstNumber >= salary.min && secondNumber <= salary.max) {
          return true;
        }
      } else {
        if (firstNumber >= salary.min) {
          return true;
        }
      }
    }
    
    return false;
  });

  const sortedJobs = filteredJobs.sort((job1, job2) => {
    const salary1 = job1.rangoSalarial.match(regex);
    const salary2 = job2.rangoSalarial.match(regex);
    
    const firstNumber1 = Number(salary1[1].replace(/,/g, ""));
    const secondNumber1 = salary1[3] ? Number(salary1[3].replace(/,/g, "")) : null;
    const firstNumber2 = Number(salary2[1].replace(/,/g, ""));
    const secondNumber2 = salary2[3] ? Number(salary2[3].replace(/,/g, "")) : null;
    
    if (secondNumber1 && secondNumber2) {
      return (firstNumber1 + secondNumber1) / 2 - (firstNumber2 + secondNumber2) / 2;
    } else {
      return firstNumber1 - firstNumber2;
    }
  });
  
  return [...sortedJobs, ...unNumeredSalaries];
};

const filteredBySalary = filterBySalary(salaries, uniqueJobs);
console.info("Filtered By Salary (Smallest to Greatest)");
console.table(filteredBySalary);
