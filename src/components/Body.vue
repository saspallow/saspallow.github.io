<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-4" v-for="(item, key) in items" :key="key">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="item.fullImage" alt="Placeholder image">
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
                  <p class="title is-4 has-text-grey">{{ item.name }}</p>
                  <p class="subtitle is-6 has-text-grey">{{ item.date }}</p>
                </div>
              </div>

              <div class="content" v-html="item.description">
              </div>
                <a href="#">#Tools</a>
            </div>
          </div>
        </div>
      </div>
      <div class="is-divider" data-content="&"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: 'Name 1',
        date: '2016 - 2017',
        fullImage: 'https://bulma.io/images/placeholders/1280x960.png',
        thumbnailImage: 'https://bulma.io/images/placeholders/96x96.png',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>`,
        tools: [
          'T1'
        ]
      },
      {
        name: 'Name 1',
        date: '2016 - 2017',
        fullImage: 'https://bulma.io/images/placeholders/1280x960.png',
        thumbnailImage: 'https://bulma.io/images/placeholders/96x96.png',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>`,
        tools: [
          'T1'
        ]
      },
      {
        name: 'Name 1',
        date: '2016 - 2017',
        fullImage: 'https://bulma.io/images/placeholders/1280x960.png',
        thumbnailImage: 'https://bulma.io/images/placeholders/96x96.png',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>`,
        tools: [
          'T1'
        ]
      }
    ]
  })
}
</script>