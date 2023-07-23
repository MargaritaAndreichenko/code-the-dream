// api url
const api_url = "https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true";


async function getarts(ids) {
    let url = "https://api.artic.edu/api/v1/artworks?ids=" + ids + "&fields=id,title,image_id";
    console.log(url);

    let response = await fetch(url);
    let res = await response.json();
    console.log(res);
    show(res.data);
}

async function searchart(artquery) {

    try {
        console.log(api_url + "&q=" + artquery);
        let response = await fetch(api_url + "&q=" + artquery);
        let res = await response.json();
        console.log(res);
        let ids = "";
        res.data.forEach(art => {
            ids = ids + art.id + ",";
        });

        ids = ids.substring(0, ids.length - 1);
        await getarts(ids);

    } catch (error) {
        console.log(error);
    }
}

// Function to define innerHTML for HTML table
function show(data) {
    let html = '';
    data.forEach(art => {
        arturl = "https://www.artic.edu/iiif/2/" + art.image_id + "/full/843,/0/default.jpg";

        let htmlSegment = `<div class="gallery">
            <a target="_blank" href="${arturl}">
                <img src="${arturl}" alt="${art.title}" width="600" height="400">
            </a>
            <div class="desc">${art.title}</div>
        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;

}