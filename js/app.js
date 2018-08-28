$(document).ready(function () {
  $('.sidenav').sidenav();

 

  function studentsInfo() {
    var studentsData = data.students;
    console.log(studentsData);

    for (var i = 0; i < studentsData.length; i++) {
      var studentName = studentsData[i].name;
      var studentPhoto = studentsData[i].photo;
      $('#students').append(studentsTemplate(studentPhoto, studentName));
    }
    
    $('.chips-placeholder').chips({
      placeholder: '+ Agrega un skill',
      secondaryPlaceholder: '+ skill',
    });
  }
  studentsInfo();

  function studentsTemplate(studentPhoto, studentName) {
    var template = '<div class="container center">' +
      '<div class="row">' +
      '<div class="col s12 z-depth-5">' +
      '<div class="col s12 l3">' +
      '<img src="' + studentPhoto + '" alt="">' +
      '</div>' +
      '<div class="col s6 l3">' +
      '<span>' + studentName + '</span>' +
      '</div>' +
      '<div class="col s6 l6">' +
      '<ins>Skills</ins>' +
      '<div class="chips chips-placeholder"></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    return template;
  }

});