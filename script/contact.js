window.onload = () => {
    const buton = document.getElementById('submitx');
    const comentariu = document.getElementsByClassName('comentariu');
    const zonacom = document.getElementsByClassName('commentsection');

    buton.addEventListener('click', () => {
        const currentDate = new Date().toJSON().slice(0, 10);

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        const commentDate = document.createElement('div');
        commentDate.classList.add('data');
        commentDate.textContent = `Data postarii: ${currentDate}`;
        
        const commentContent = document.createElement('p');
        commentContent.classList.add('commentcontent');
        commentContent.textContent = comentariu.value;
        commentDiv.append(commentContent, commentContent)
    
        zonacom.append(commentDiv);
        console.log(commentDate);
    });
}