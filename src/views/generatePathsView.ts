const generatePathsView = function (names: Array<string>) {
    const header = `
    <!DOCTYPE html>
<html>

   <head>
      <title>All images</title>
   </head>
	
   <body>
      <ul>
    `
    const footer = `
    </ul>
    </body>
    
 </html>
    `

    let entries = ''

    names.forEach(function(name: string){
        entries+=(`<li>${name}</li>`)
    })

    if(entries == '') entries = 'No images found'

    return header+entries+footer

}

export default generatePathsView