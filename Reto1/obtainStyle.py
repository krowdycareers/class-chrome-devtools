import re
with open("Trabajo de Auxiliar contable Coyoacán, Ciudad de México _ OCCMundial 16597714.html","r") as archivo:
    contenido = archivo.read()
#contenido = contenido.replace("\n","")
#print(contenido)
#contenido
test = "<text>hola</text>safafsd<text>hola1</text>"
patt = r"<style[^>]*>([^<]*)"
matches = re.findall(patt,contenido)
print(matches)
print(matches[0])
print(len(matches))
text  = "\n".join(matches)
with open("index2.css","w") as archivo:
    archivo.write(text)
