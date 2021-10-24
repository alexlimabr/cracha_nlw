const LinksSocialMedia = {
  github: 'alexlimabr',
  youtube: '',
  facebook: 'alex.aslbr',
  instagram: 'alex_as.l',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
//ser humano 12345...
//computador 012345...
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
    //alterando as informações do html através de "id's"

  })
}
getGitHubProfileInfos()

