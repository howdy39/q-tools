import Vue from 'vue';
import AutoLikeComponent from './extend/auto-like.js';
import MuteAlreadyReadArticleComponent from './extend/mute-already-read-article.js';
import MuteUserComponent from './extend/mute-user.js';
import ShowLineNumberComponent from './extend/show-line-number.js';



export default function (settings) {
  const component = Vue.extend({
    template: `<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                 <show-line-number></show-line-number>
               </section>
               <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                 <mute-user></mute-user>
               </section>
               <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                 <auto-like></auto-like>
               </section>
               <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                 <mute-already-read-article></mute-already-read-article>
               </section>`,
    components: {
      'auto-like' : AutoLikeComponent(settings),
      'mute-already-read-article': MuteAlreadyReadArticleComponent(settings),
      'mute-user' : MuteUserComponent(settings),
      'show-line-number' : ShowLineNumberComponent(settings),
    }
  });

  return component;
}
