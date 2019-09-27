window.onload = function() {

    let wrapper = document.getElementsByClassName('wrapper')[0];
    // console.log(wrapper);

    let myObj = fetch('http://krapipl.imumk.ru:8082/api/mobilev1/update', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({'data': ''})
    })
    .then(response => response.json())
        .then(data => renderIt(data));

    function renderIt(obj) {
        console.log(obj.items[0]);
        for (let i = 0; i < 5; i++) {
            //create elements
            let el = document.createElement('div'),
                imgCourseId = document.createElement('img'),
                divInfo = document.createElement('div'),
                pSubject = document.createElement('p'),
                pGrade = document.createElement('p'),
                pGenre = document.createElement('p'),
                pLink = document.createElement('p'),
                a = document.createElement('a'),
                button = document.createElement('p'),
                button__a = document.createElement('a');


            //add classes and attr
            el.className = "el";
            divInfo.className = "sci-info";
            pGenre.className = "p-genre";
            imgCourseId.className = "img-courseid";
            a.className = "a-offer";
            button.className = "sci-controls";
            button__a.className = "button__a";

            imgCourseId.setAttribute('src', 'www.imumk.ru/svc/coursecover/' + obj.items[i]['courseId']);
            a.setAttribute('href', obj.items[i]['shopUrl']);

            //addContent
            pSubject.textContent = obj.items[i]['subject'];
            pGrade.textContent = obj.items[i]['grade'] + ' класс';
            pGenre.textContent = obj.items[i]['genre'];
            a.textContent = 'Подробнее';
            button__a.textContent = 'Попробовать';

            //render elements
            wrapper.appendChild(el);
            el.appendChild(imgCourseId);
            el.appendChild(divInfo);
            divInfo.appendChild(pSubject);
            divInfo.appendChild(pGrade);
            divInfo.appendChild(pGenre);
            divInfo.appendChild(pLink);
                    pLink.appendChild(a);
            divInfo.appendChild(button);
            button.appendChild(button__a);
        }
    }
};
