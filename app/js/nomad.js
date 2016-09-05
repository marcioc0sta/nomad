$(function () {
  // tooltip activate
  $('[data-toggle="tooltip"]').tooltip();

  // display search filters
  $('#filter-trigger').on('click', function(){
    $('.filters-row').toggleClass('hidden');
  });

  //get today data
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var today = d.getFullYear() + '-' +
      ((''+month).length<2 ? '0' : '') + month + '-' +
      ((''+day).length<2 ? '0' : '') + day;

  $('#search').val(today);

  $('#search').mask("9999-99-99", {placeholder: 'YYYY-MM-DD' });

  // content-toogle
  $('.content-toogle').on('click', function(){
    $(this).parent().toggleClass('not-visible');
    $(this).toggleClass('text-rotate');
  });
});
