function Card(obj) {
  return `
  <div
  id="jobcard-16546721"
  class="card-0-2-518 flat-0-2-520 card-0-2-554 standout-0-2-555"
>
  <div class="conFluid-0-2-60 gridContainer-0-2-571">
    <div class="row-0-2-173 cardContent-0-2-558">
      <div class="col-0-2-174 xs12-0-2-443 ribbonCol-0-2-577 formatCol-0-2-572">
        <div class="flex-0-2-4 jbetween-0-2-16 astart-0-2-19">
          <div class="flex-0-2-4 wrap-0-2-11 astart-0-2-19">
            <label
              class="text-0-2-82 small-0-2-90 highEmphasis-0-2-103 date-0-2-568"
              >Hoy</label
            >
          </div>
          <label
            class="tag-0-2-585 small-0-2-586 primary-0-2-594 recommendedLabel-0-2-563"
            ><div class="flex-0-2-4 noWrap-0-2-10 acenter-0-2-21">
              <span
                class="tagText-0-2-589 smallTagText-0-2-590"
                style="padding-right: 0"
                >Recomendada</span
              >
            </div></label
          >
        </div>
      </div>
      <div class="col-0-2-174 xs12-0-2-443 formatCol-0-2-572">
        <div class="flex-0-2-4 wrap-0-2-11">
          <h2
            class="text-0-2-82 subheading-0-2-86 highEmphasis-0-2-103 job-0-2-557 longWord-0-2-576"
          >
            ${obj.title2}
          </h2>
        </div>
      </div>
      <div
        class="col-0-2-174 xs12-0-2-443 formatCol-0-2-572 spaceBottom-0-2-564"
      >
        <div class="flex-0-2-4 wrap-0-2-11 acenter-0-2-21">
          <span
            class="text-0-2-82 standard-0-2-89 highEmphasis-0-2-103 salary-0-2-560"
            >$ ${obj.salary1} - $ ${obj.salary2} Mensual</span
          >
        </div>
      </div>
      <div
        class="col-0-2-174 xs12-0-2-443 spaceBottom-0-2-564 formatCol-0-2-572"
      >
        <ul class="ul-0-2-578">
          <li class="text-0-2-82 small-0-2-90 highEmphasis-0-2-103 li-0-2-579">
            Prestaciones de ley (IMSS, vacaciones, aguinaldo)
          </li>
          <li class="text-0-2-82 small-0-2-90 highEmphasis-0-2-103 li-0-2-579">
            Excelente ambiente de trabajo
          </li>
          <li class="text-0-2-82 small-0-2-90 highEmphasis-0-2-103 li-0-2-579">
            Sueldo competitivo
          </li>
        </ul>
      </div>
      <div class="fresnel-container fresnel-at-sm"></div>
      <div class="col-0-2-174 xs12-0-2-443 formatCol-0-2-572">
        <div class="flex-0-2-4 acenter-0-2-21">
          <div class="" style="flex: 1">
            <div class="flex-0-2-4 jbetween-0-2-16 acenter-0-2-21">
              <div>
                <label
                  class="text-0-2-82 standard-0-2-89 highEmphasis-0-2-103 strong-0-2-92 linkContainer-0-2-566"
                  ><a
                    class="locContainer-0-2-565 companyLink-0-2-567 noClickable-0-2-582"
                    ><div class="fresnel-container fresnel-lessThan-sm">
                      ${obj.enterprise}
                    </div>
                    <div
                      class="fresnel-container fresnel-greaterThanOrEqual-sm"
                    ></div></a
                ></label>
                <p
                  class="text-0-2-82 small-0-2-90 highEmphasis-0-2-103 zonesLinks-0-2-602"
                >
                  <a
                    class="link-0-2-603 metalink-0-2-604 linkNoMarginRight-0-2-605"
                    >${obj.country}</a
                  >
                </p>
              </div>
              <div class="logo-0-2-569">
                <div class="link-0-2-608">
                  <svg
                    class="icon-0-2-74 atomic__building-o icon-0-2-610"
                    width="48"
                    height="48"
                    fill="#222222"
                    style="transition: 0.3s all"
                  >
                    <use
                      xlink:href="/jobs-assets/atomic-icons-1.5.1.svg#atomic__building-o"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="fresnel-container fresnel-greaterThan-sm"></div>
          </div>
        </div>
      </div>
      <div class="fresnel-container fresnel-lessThan-sm">
        <div class="col-0-2-174 xs12-0-2-443 formatCol-0-2-572"></div>
      </div>
    </div>
  </div>
</div>

  `;
}

export default Card;
