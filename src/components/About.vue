<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="user-circle" class="icon"/> About</h1>
        <div>
            <div class="about">
              <div class="me">
                <h2><font-awesome-icon icon="pen" class="icon"/> Name</h2>
                <p class="text">める(meru_golang)</p>
              </div>

              <div class="me">
                <h2><font-awesome-icon icon="birthday-cake" class="icon"/> Birthday</h2>
                <p class="text">3/3</p>
              </div>

              <div class="me">
                <h2><img src="../assets/tryhackme/tryhackme.svg" class="try-icon"/> TryHackMe</h2>
                <img src="https://tryhackme-badges.s3.amazonaws.com/merugolang.png" alt="TryHackMe">
              </div>

            </div>
            <h2><font-awesome-icon icon="heart" class="icon resent"/> A little self introduction</h2>
            <p class="text">
            毎日VRChatで幼女をやってます。<br>
            UnityとBlenderができるようになってた。
            </p>
        </div>
    </div>
</template>


<style scoped>
.about{
    display:inline-flex;
    padding-left: 5%;
    padding-right: 5%;
}

.resent{
  margin-top: 50px;
}

.me{
    margin:0 50px;
}

.text{
  font-weight: 300;
}

.try-icon{
    height: 20px;
    width: 20px;
}

@media screen and (max-width: 768px){
	.about {
		flex-direction: column;
	}

	.me {
    margin: 0 auto;
	}
}
</style>
