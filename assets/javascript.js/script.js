let usuarios = ''

for (let i = 0; i < 10; i++) {
  const nombre = faker.name.firstName()
  const apellido = faker.name.lastName()
  const ciudad = faker.address.city()
  const profesion = faker.name.jobTitle()
  const telefono = faker.phone.phoneNumber()
  const correo = faker.internet.email()
  const sueldo = faker.random.number()
  var edad = []

  for (let i = 0; i < 1; i++) {
    edad[i] = parseInt(Math.random()* 100);
  }

  usuarios += (`{ "nombre": "${nombre}", "apellido": "${apellido}" , "ciudad": "${ciudad}", "profesion": "${profesion}", "telefono": "${telefono}", "correo": "${correo}", "sueldo": "${sueldo}", "edad": "${edad}" },`)
}

console.log(usuarios)

/*{ "nombre": "Dixie", "apellido": "Macejkovic" , "ciudad": "Cristville", "profesion": "Future Assurance Producer", "telefono": "269.695.0753 x941", "correo": "Aisha_Ortiz72@yahoo.com", "sueldo": "54446", "edad": "34" },{ "nombre": "Adrianna", "apellido": "Ebert" , "ciudad": "Rodolfofort", "profesion": "Internal Factors Strategist", "telefono": "399-223-0877 x247", "correo": "Danial44@gmail.com", "sueldo": "1615", "edad": "17" },{ "nombre": "Jerad", "apellido": "Hilll" , "ciudad": "Stephentown", "profesion": "Investor Directives Representative", "telefono": "(984) 487-2746 x795", "correo": "Clark_Klein@gmail.com", "sueldo": "33907", "edad": "26" },{ "nombre": "Lily", "apellido": "Wunsch" , "ciudad": "Lake Thoramouth", "profesion": "Chief Applications Producer", "telefono": "1-500-914-1433", "correo": "Hassan.Torphy32@yahoo.com", "sueldo": "37184", "edad": "42" },{ "nombre": "Burdette", "apellido": "Padberg" , "ciudad": "West Kristoferland", "profesion": "National Creative Supervisor", "telefono": "403.806.3616", "correo": "Kailee16@hotmail.com", "sueldo": "28487", "edad": "42" },{ "nombre": "Sage", "apellido": "Bergstrom" , "ciudad": "North Geraldinefurt", "profesion": "Human Optimization Manager", "telefono": "(434) 231-1907 x14543", "correo": "Victor_Adams43@gmail.com", "sueldo": "48034", "edad": "81" },{ "nombre": "Isom", "apellido": "Runolfsdottir" , "ciudad": "New Freddiefort", "profesion": "Central Factors Engineer", "telefono": "(302) 303-8300", "correo": "Monroe_Schaefer@yahoo.com", "sueldo": "43995", "edad": "23" },{ "nombre": "Tia", "apellido": "Ernser" , "ciudad": "Shaynashire", "profesion": "Direct Operations Designer", "telefono": "915.879.2663", "correo": "Lucile_Jones13@hotmail.com", "sueldo": "80163", "edad": "72" },{ "nombre": "Camryn", "apellido": "Sanford" , "ciudad": "East Sophiashire", "profesion": "Dynamic Infrastructure Developer", "telefono": "980-454-6503 x670", "correo": "Raven17@gmail.com", "sueldo": "71264", "edad": "50" },{ "nombre": "Rod", "apellido": "Osinski" , "ciudad": "New Manuelaview", "profesion": "Direct Directives Producer", "telefono": "1-420-682-3599", "correo": "Nyah71@hotmail.com", "sueldo": "69765", "edad": "28" }

db.usuarios.insertMany([{ "nombre": "Dixie", "apellido": "Macejkovic" , "ciudad": "Cristville", "profesion": "Future Assurance Producer", "telefono": "269.695.0753 x941", "correo": "Aisha_Ortiz72@yahoo.com", "sueldo": "54446", "edad": "34" },{ "nombre": "Adrianna", "apellido": "Ebert" , "ciudad": "Rodolfofort", "profesion": "Internal Factors Strategist", "telefono": "399-223-0877 x247", "correo": "Danial44@gmail.com", "sueldo": "1615", "edad": "17" },{ "nombre": "Jerad", "apellido": "Hilll" , "ciudad": "Stephentown", "profesion": "Investor Directives Representative", "telefono": "(984) 487-2746 x795", "correo": "Clark_Klein@gmail.com", "sueldo": "33907", "edad": "26" },{ "nombre": "Lily", "apellido": "Wunsch" , "ciudad": "Lake Thoramouth", "profesion": "Chief Applications Producer", "telefono": "1-500-914-1433", "correo": "Hassan.Torphy32@yahoo.com", "sueldo": "37184", "edad": "42" },{ "nombre": "Burdette", "apellido": "Padberg" , "ciudad": "West Kristoferland", "profesion": "National Creative Supervisor", "telefono": "403.806.3616", "correo": "Kailee16@hotmail.com", "sueldo": "28487", "edad": "42" },{ "nombre": "Sage", "apellido": "Bergstrom" , "ciudad": "North Geraldinefurt", "profesion": "Human Optimization Manager", "telefono": "(434) 231-1907 x14543", "correo": "Victor_Adams43@gmail.com", "sueldo": "48034", "edad": "81" },{ "nombre": "Isom", "apellido": "Runolfsdottir" , "ciudad": "New Freddiefort", "profesion": "Central Factors Engineer", "telefono": "(302) 303-8300", "correo": "Monroe_Schaefer@yahoo.com", "sueldo": "43995", "edad": "23" },{ "nombre": "Tia", "apellido": "Ernser" , "ciudad": "Shaynashire", "profesion": "Direct Operations Designer", "telefono": "915.879.2663", "correo": "Lucile_Jones13@hotmail.com", "sueldo": "80163", "edad": "72" },{ "nombre": "Camryn", "apellido": "Sanford" , "ciudad": "East Sophiashire", "profesion": "Dynamic Infrastructure Developer", "telefono": "980-454-6503 x670", "correo": "Raven17@gmail.com", "sueldo": "71264", "edad": "50" },{ "nombre": "Rod", "apellido": "Osinski" , "ciudad": "New Manuelaview", "profesion": "Direct Directives Producer", "telefono": "1-420-682-3599", "correo": "Nyah71@hotmail.com", "sueldo": "69765", "edad": "28" }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f9acff0c944e83c6987d6ca"),
                ObjectId("5f9acff0c944e83c6987d6cb"),
                ObjectId("5f9acff0c944e83c6987d6cc"),
                ObjectId("5f9acff0c944e83c6987d6cd"),
                ObjectId("5f9acff0c944e83c6987d6ce"),
                ObjectId("5f9acff0c944e83c6987d6cf"),
                ObjectId("5f9acff0c944e83c6987d6d0"),
                ObjectId("5f9acff0c944e83c6987d6d1"),
                ObjectId("5f9acff0c944e83c6987d6d2"),
                ObjectId("5f9acff0c944e83c6987d6d3")
        ]
}

3 sumar un monto a otro, operación $inc
- pasar los sueldos de string a int
db.usuarios.find() .forEach( function (i) { i.sueldo= parseInt(i.sueldo); db.usuarios.save(i);});

> db.usuarios.updateMany({"ciudad": "Cristville" },{ $inc:{"sueldo":1000000}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

{
        "_id" : ObjectId("5f9acff0c944e83c6987d6ca"),
        "nombre" : "Dixie",
        "apellido" : "Macejkovic",
        "ciudad" : "Cristville",
        "profesion" : "Future Assurance Producer",
        "telefono" : "269.695.0753 x941",
        "correo" : "Aisha_Ortiz72@yahoo.com",
        "sueldo" : 1054446,
        "edad" : "34"
}

4 crear un script para eliminar a personas que tengan menos de 18 años
-pasar la edad de string a int
db.usuarios.find() .forEach( function (a) { a.edad= parseInt(a.edad); db.usuarios.save(a);});

db.usuarios.find({ "edad": { $lt: 18 }});
{ "_id" : ObjectId("5f9acff0c944e83c6987d6cb"), "nombre" : "Adrianna", "apellido" : "Ebert", "ciudad" : "Rodolfofort", "profesion" : "Internal Factors Strategist", "telefono" : "399-223-0877 x247", "correo" : "Danial44@gmail.com", "sueldo" : 1615, "edad" : 17 }

db.usuarios.deleteMany({ "edad" : { $lt:18 }});
{ "acknowledged" : true, "deletedCount" : 1 }

 db.usuarios.find();
{ "_id" : ObjectId("5f9acff0c944e83c6987d6ca"), "nombre" : "Dixie", "apellido" : "Macejkovic", "ciudad" : "Cristville", "profesion" : "Future Assurance Producer", "telefono" : "269.695.0753 x941", "correo" : "Aisha_Ortiz72@yahoo.com", "sueldo" : 1054446, "edad" : 34 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6cc"), "nombre" : "Jerad", "apellido" : "Hilll", "ciudad" : "Stephentown", "profesion" : "Investor Directives Representative", "telefono" : "(984) 487-2746 x795", "correo" : "Clark_Klein@gmail.com", "sueldo" : 33907, "edad" : 26 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6cd"), "nombre" : "Lily", "apellido" : "Wunsch", "ciudad" : "Lake Thoramouth", "profesion" : "Chief Applications Producer", "telefono" : "1-500-914-1433", "correo" : "Hassan.Torphy32@yahoo.com", "sueldo" : 37184, "edad" : 42 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6ce"), "nombre" : "Burdette", "apellido" : "Padberg", "ciudad" : "West Kristoferland", "profesion" : "National Creative Supervisor", "telefono" : "403.806.3616", "correo" : "Kailee16@hotmail.com", "sueldo" : 28487, "edad" : 42 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6cf"), "nombre" : "Sage", "apellido" : "Bergstrom", "ciudad" : "North Geraldinefurt", "profesion" : "Human Optimization Manager", "telefono" : "(434) 231-1907 x14543", "correo" : "Victor_Adams43@gmail.com", "sueldo" : 48034, "edad" : 81 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6d0"), "nombre" : "Isom", "apellido" : "Runolfsdottir", "ciudad" : "New Freddiefort", "profesion" : "Central Factors Engineer", "telefono" : "(302) 303-8300", "correo" : "Monroe_Schaefer@yahoo.com", "sueldo" : 43995, "edad" : 23 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6d1"), "nombre" : "Tia", "apellido" : "Ernser", "ciudad" : "Shaynashire", "profesion" : "Direct Operations Designer", "telefono" : "915.879.2663", "correo" : "Lucile_Jones13@hotmail.com", "sueldo" : 80163, "edad" : 72 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6d2"), "nombre" : "Camryn", "apellido" : "Sanford", "ciudad" : "East Sophiashire", "profesion" : "Dynamic Infrastructure Developer", "telefono" : "980-454-6503 x670", "correo" : "Raven17@gmail.com", "sueldo" : 71264, "edad" : 50 }
{ "_id" : ObjectId("5f9acff0c944e83c6987d6d3"), "nombre" : "Rod", "apellido" : "Osinski", "ciudad" : "New Manuelaview", "profesion" : "Direct Directives Producer", "telefono" : "1-420-682-3599", "correo" : "Nyah71@hotmail.com", "sueldo" : 69765, "edad" : 28 }

*/