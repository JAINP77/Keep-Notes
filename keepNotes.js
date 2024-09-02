function addNote() {
    const notesList = $('.notes-list');

    const title = $('.note-title');
    const note = $('textarea');

    const titleName = title.val().trim();
    const noteData = note.val().trim();

    if (titleName==='' && noteData==='') {
        alert('All fields are compulsory!');
        return;
    }

    const listItem = $('<li></li>');
    listItem.data('title',titleName);
    listItem.data('note',noteData);
    listItem.text(titleName);

    notesList.append(listItem);

    title.val('');
    note.val('');

}

$('.notes-list').on('click','li',function(){
    const noteTitle = $(this).data('title');
    const noteData = $(this).data('note');

    $('.card-title').text(noteTitle);
    $('.card-text').text(noteData);

    $('.note-card').fadeIn();
})

$('.close-card-btn').on('click',function(){
    $('.note-card').fadeOut();
})

$('.add-note-btn').on('click',addNote);