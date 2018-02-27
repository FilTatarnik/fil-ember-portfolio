export default function(){

	this.transition(
    this.fromRoute('rentals'),
    this.toRoute('about'),
    this.fromRoute('about'),
    this.toRoute('contact'),
    this.fromRoute('contact'),
    this.toRoute('languages'),
    this.fromRoute('languages'),
    this.toRoute('social'),
    this.fromRoute('projects'),
    this.toRoute('rentals'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}

	




  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

