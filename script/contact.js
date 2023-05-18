window.onload = () => {
    const buton = document.getElementById('submitx');
    const titlu = document.getElementById('titlucom'); //
    const nume = document.getElementById('nume'); //
    const email = document.getElementById('email')
    const comentariu = document.querySelector('textarea');
    const zonacom = document.getElementById('commentsection');

    buton.addEventListener('click', (event) => {
        const currentDate = new Date().toJSON().slice(0, 10);

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const commentMail = document.createElement('div');
        commentMail.classList.add('mail');
        const commentName = document.createElement('div');
        commentName.classList.add('name');
        const commentTitle = document.createElement('div');
        commentTitle.classList.add('title');
        const commentDate = document.createElement('div');
        commentDate.classList.add('data');
        commentDate.textContent = `Data postarii: ${currentDate}`;
        commentDate.style.textAlign = "left";
        const commentElem = document.createElement('div');
        commentElem.style.display = "grid";
        commentElem.style.gridTemplateColumns = "repeat(3,1fr)";
        commentElem.style.margin = "1vh";

        const commentContent = document.createElement('p');
        commentContent.classList.add('commentcontent');
        commentContent.textContent = comentariu.value;
        commentTitle.textContent = titlu.value;
        commentName.textContent = nume.value;
        commentMail.textContent = email.value;
        commentMail.style.textAlign = "right";
        commentElem.append(commentDate);
        commentElem.append(commentName);
        commentElem.append(commentMail);
        commentElem.style.margin = "2vh";
        commentDiv.append(commentElem);
        commentTitle.style.margin = "2vh";
        commentTitle.style.fontSize = "3.5vh";
        commentTitle.style.color = "black";
        commentDiv.append(commentTitle)
        commentContent.style.color = "rgb(115, 139, 47)";
        commentDiv.append(commentContent);
    
        zonacom.append(commentDiv);
        console.log(commentDate);

        event.preventDefault();
    });
}