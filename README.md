# Simple Arts page

Searches and display artworks images

## Author

Margarita Andreichenko (margo31848@gmail.com)

## Description

Prework assigment project for [Code the Dream](https://codethedream.org/) React.js advanced courses.

Shows using HTML CSS JS and public API (ARTIC – an art API from the Art Institute of Chicago).

### Installing

Create a local folder on you computer. Copy index.html, style.css, script.js in the folder. Then open index.html in your browser.
Enter what text to search artworks. It can be artist name or masterpiece name or part of the names.
Press button "Search". Found artworks should be displayed. You can click on image to see a bigger in a new tab.

### API used

to search artworks ids
<https://api.artic.edu/api/v1/artworks/search?q=cats&query[term>][is_public_domain]=true

to retrieve image_id and title of artworks
<https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,image_id>

artwork url
<https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg>

### Inspiration, code snippets, etc

* [Khan Academy](https://www.khanacademy.org/computing/computer-programming)
* [JavaScript fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)
* [CSS to display images](https://www.w3schools.com/css/css_image_gallery.asp)
* [Stackoverflow](https://stackoverflow.com/)

### Tools and IDEs
* [VS Code](https://code.visualstudio.com/)
