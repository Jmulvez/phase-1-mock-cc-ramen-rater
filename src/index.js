function getAllRamens(ramens)

let card = document.createElement('li')
card.className = 'ramen'
card.innerHTML = '
    <img src="${ramen.imageUrl}">
    <div class="content">
        <form id="edit-ramen">
            <h4>${ramen.name}</h4>
            <label>"Rating:"</label>
            <input type="number" name="rating" id="new-rating" />
            <label>"New-Comment"</label>
            <textarea name="new-comment" id="new-comment"></textarea>
            <input type="submit" value="update" />
        </form>
    </div>
    '
    
    document.querySelector('#ramen-menu').appendChild(card)

    fetch('http://localhost:3000/ramens') {
    .then(res => res.json())
    .then(ramenData => ramenData.forEach(ramens => getAllRamens))
    console.log(ramens)
}

function initialize() {
    getAllRamens()
    console.log()
}
initialize()