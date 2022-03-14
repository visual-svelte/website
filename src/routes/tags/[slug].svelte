<script context="module">
  import CMS from "$data/cms";

  export async function load(ctx) {
    let slug = ctx.url.pathname;

    const tag_id = slug.split("/").pop();

    const content = CMS.filter(
      (records) => records.published && records.keywords.includes(tag_id)
    ).map((post) => {
      return {
        id: post.primary_key,
        thumbnail: post.thumbnail,
        title: post.post_title,
        keywords: post.keywords,
      };
    });
    //implement the search of the pageContent database with the primaryKey
    return { props: { content, tag_id } };
  }
</script>

<script>
  import SimplePostCard from "$components/SimplePostCard.svelte";

  export let content;
  export let tag_id;
</script>

<div class="holder">
  <p>
    Explore all content related to the {tag_id} tag:
  </p>

  {#each content as post}
    <SimplePostCard data={post} />
  {/each}
</div>

<style>
  .holder {
    text-align: left;
  }
</style>
