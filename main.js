$('#contributionsTab').on('click', function(e) {
  $('#mainNavTabs > div').removeClass('selectedTab');
  $(this).addClass('selectedTab');

  $('.tabMain').removeClass('openTabMain');
  $('.contributionsMain').addClass('openTabMain');
});

$('#repositoriesTab').on('click', function(e) {
  $('#mainNavTabs > div').removeClass('selectedTab');
  $(this).addClass('selectedTab');

  $('.tabMain').removeClass('openTabMain');
  $('.repositoriesMain').addClass('openTabMain');
});

$('#publicActivityTab').on('click', function(e) {
  $('#mainNavTabs > div').removeClass('selectedTab');
  $(this).addClass('selectedTab');

  $('.tabMain').removeClass('openTabMain');
  $('.publicActivityMain').addClass('openTabMain');
});

$('#repoNavRight > a').on('click', function(e) {
  $('#repoNavRight > a').removeClass('activeFilter');
  $(this).addClass('activeFilter');
});
