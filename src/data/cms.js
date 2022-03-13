import D3AxisSimple from "$components/d3/D3AxisSimple.svelte";
import AxisDifferent from "$components/d3/AxisDifferent.svelte";

let CMS = [
  {
    primary_key: "d3-axis",
    github_repo: "https://github.com/d3/d3-axis",
    published: "2022-03-13",
    post_title: "Implementing D3 Axis in SvelteKit",
    thumbnail: "d3-axis.jpg",
    keywords: ["d3", "axis"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "D3AxisSimple",
        title: "Simple D3 Axis",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: { margin: 40, svg_height: 300, svg_width: 400 },
        component: D3AxisSimple,
        github:
          "https://api.github.com/repos/visual-svelte/website/contents/src/components/d3/AxisSimple.svelte",
      },
      {
        id: "D3AxisLog",
        title: "Logarithmic D3 Axis",
        notes: "Lorem dipsum goes here",
        props: { margin: 40, svg_height: 300, svg_width: 400 },
        component: AxisDifferent,
        github:
          "https://api.github.com/repos/visual-svelte/website/contents/src/components/d3/AxisSimple.svelte",
      },
    ],
  },
];

export default CMS;
