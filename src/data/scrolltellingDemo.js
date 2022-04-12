const data = [
  {
    attention: [
      "VISUALIZING DATA CHANGES: we start with a simple bar chart (minimal styling on this one to focus on the functionality!). We're visualizing the data for Jan-2020 currently, but what if we next wanted to show the data for Feb-2020? ",
      "The animation is triggered by the Scrolly 'value'. On the data change, a simple Svelte tween tweens between the old and the new values (for each bar).",
      "To bring a closer connection between the bars and the textual descriptions scrolling past, you can add some custom styling to the categories. For example, we can see the <span style='background-color:#5d3754;padding:2px 5px;border-radius:5px; color: white'>Donut</span> sales here far outweighed those of the humble <span style='background-color:#dc582a;padding:2px 5px;border-radius:5px; color: white' class='cat cherry'>cherry</span>.",
      "We can also go one step further to really focus on just one of the bars and explain in in the must greater depth. ",
      "This is achieved through use of the ternary operator on the Rect styling. ",
    ],
  },
];

export default data;
