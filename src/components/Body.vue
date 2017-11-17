<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-4" v-for="(item, key) in items" :key="key">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img v-img :src="item.fullImage">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="item.thumbnailImage" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 has-text-grey">{{ item.title }}</p>
                  <p class="subtitle is-6 has-text-grey">{{ item.subTitle }}</p>
                </div>
              </div>

              <div class="content" v-html="item.description">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="is-divider" data-content="&"></div>
      
      <div class="columns">
        <div class="column is-4" v-for="(item, key) in items2" :key="key">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img v-img :src="item.fullImage">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="item.thumbnailImage" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 has-text-grey">{{ item.title }}</p>
                  <p class="subtitle is-6 has-text-grey">{{ item.subTitle }}</p>
                </div>
              </div>

              <div class="content" v-html="item.description">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Stock Charts',
        subTitle: 'With Tradingview',
        fullImage: '/static/projects/tv.PNG',
        thumbnailImage: '/static/projects/tv_tn.jpg',
        description: `Stock Charts Integration With HitradeX.`,
        tools: [
          'T1'
        ]
      },
      {
        title: 'HitradeX',
        subTitle: 'Stock Trading',
        fullImage: '/static/projects/hx.PNG',
        thumbnailImage: '/static/projects/hx_tn.jpg',
        description: `Application For Stock Trading.`,
        tools: [
          'T1'
        ]
      },
      {
        title: 'Event Logs',
        subTitle: 'Dell EMC',
        fullImage: 'https://raw.githubusercontent.com/saspallow/saspallow.github.io/master/static/projects/eventlogs.png',
        thumbnailImage: '/static/projects/eventlogs_tn.jpg',
        description: `Application for registration, Keep logs of attendees.`,
        tools: [
          'T1'
        ]
      }
    ],
    items2: [
      {
        title: 'CHANCHAI ENGINEERING',
        subTitle: '& EQUIPMENT Co.,Ltd.',
        fullImage: 'https://raw.githubusercontent.com/saspallow/saspallow.github.io/master/static/projects/cce.png',
        thumbnailImage: '/static/projects/cce_tn.jpg',
        description: `Application for Sell&Products Management Online.`,
        tools: [
          'T1'
        ]
      },
      {
        title: 'Mitrphol Inventory',
        subTitle: 'Inventory Management OF IT ASSETS',
        fullImage: 'https://raw.githubusercontent.com/saspallow/saspallow.github.io/master/static/projects/mitrphol.png',
        thumbnailImage: '/static/projects/mitrphol_tn.jpg',
        description: `Application for Inventory Management.`,
        tools: [
          'T1'
        ]
      }
    ]
  })
}
</script>