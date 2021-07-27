<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="heart" class="icon"/> Favorites</h1>
        <div>
            <div class="like">
              <div class="likes">
                <p class="text"><vue-typer
  :text='["Anime","Programming","Twitter","Mastodon","Github","BitCoin","Money","Vtuber","Tiktok","Youtube","Discord","Telegram","Golang","Vue.js","React","Flutter","JavaScript","TypeScript","C","C++","C#","Unity","VSCode","Vim","ArchLinux","VALORANT","Apex Legends","osu!","BeatSaber","Amazon","conoha","O.N.G.E.K.I","Sound Voltex","TIE_Ru","Kairiki bear","Wraith","Octane","Revenant","Crypto","Tor","VRChat"]'
  :repeat='Infinity'
  :shuffle='true'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='1500'
  :erase-delay='40'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='smooth'
></vue-typer>
              </p>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.like{
    display:inline-flex;
    padding-left: 5%;
    padding-right: 5%;
}

.likes{
    margin:0 50px;
}

.text{
  font-weight: 500;
}

.vue-typer{
  font-size: 50px;
}

@media screen and (max-width: 768px){
	.like {
		flex-direction: column;
	}

	.likes {
    margin: 0 auto;
	}
}
</style>