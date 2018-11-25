exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mainArticle')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('mainArticle').insert([
        {
          id: 1,
          title:'Researchers dress up as panda bears to fool cub',
          article:'It was a difficult problem: how do you look after a panda cub without it getting too used to humans? Reseachers at the Wolong Giant Panda Research Centre came up with an ingenious solution, dressing up as panda bears to trick the cute cub.'
        },
        {
          id:2,
          title:'Bears "guard" cannabis fields',
          article:'Police in Canada found themselves dealting with some unlikely criminals, when they discovered a gang of bears guarding a marijuana farm during a raid. Five police officers had been called to the marijuana plantation to dismantle the farm and arrest two men, but found themselves confronted by 13 black bears. Fortunately police soon realised that they showed no signs of aggressive behaviour and were in fact tame.'
        },
        {
          id:3,
          title:'Crime-busting parrot fights off buglars',
          article:"In an interesting alternative to a buglar alarm, Russian interpreter Gennadi Kurkal was saved from being robbed by his pet parrot's squawking. Thieves managed to steal his wallet by reaching through a window, but were stopped in their tracks but Kuzya the parrot when they tried to enter his London home. The protective bird let out a massive scream, sending the criminals scarpering." 
        },
        {
          id:4,
          title:"Rabbit whisperer can put bunnies in a trance",
          article:"One of this year's strangest animal stories was the tale of Cliff Penrose, who claimed to be Britain's only rabbit whisperer. The 60-year-old claimed he was ablt to hypnotise bunnies by applying pressure and massaging certain parts of the body, including the belly, which relaxed them."
        },
        {
          id:5,
          title:"Cat with can on its head finds its way to rescue centre",
          article:"Staff at an animal rescue centre in Fife were amazed when a lost cat managed to find its way there - despite having its head stuck in a food can. The cat had apparently got stuck after tucking in to a discarded tin of cat food. The disorientated moggy avoided being hit by passing traffic, miraculously managing to stunple across the Scottish SPCA rescue centre."
        }
      ]);
    });
};
