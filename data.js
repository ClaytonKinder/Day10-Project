/////////////////////////
// TEMPLATES
////////////////////////

var repoBlockTmpl = _.template( $('#repoBlockTemplate').html() );
_.each(githubRepos, function(el, idx, array) {
  $('#repoMain').append(repoBlockTmpl(el));
});

var activityBlockTmpl = _.template( $('#activityBlockTemplate').html() );
_.each(githubActivity, function(el, idx, array) {
  $('.publicActivityMain').append(activityBlockTmpl(el));
});

var navUserTmpl = _.template( $('#navUserTemplate').html() );
$('#navProfile').append(navUserTmpl(githubUser));

var userDataTmpl = _.template( $('#userDataTemplate').html() );
$('aside').prepend(userDataTmpl(githubUser));

var userOrgsTmpl = _.template( $('#userOrgsTemplate').html() );
$('#userOrganizationsGrid').append(userOrgsTmpl(githubOrgs));


// $('#repoMain').append(mergedRepoBlock);
