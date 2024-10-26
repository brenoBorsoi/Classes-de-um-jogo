class hero {
    constructor(name, age, tipe) {
      this.name = name;
      this.age = age;
      this.tipe = tipe;
    }
  
    toAtack() {
      let atack;
      
      switch (this.tipe) {
        case 'mago':
          atack = 'usou magia';
          break;
        case 'guerreiro':
          atack = 'usou espada';
          break;
        case 'monge':
          atack = 'usou artes marciais';
          break;
        case 'ninja':
          atack = 'usou shuriken';
          break;
      }
  
      console.log(`O ${this.tipe} atacou usando ${atack}`);
    }
  }
  
  const hero1 = new hero('Breno', 30, 'guerreiro');
  hero1.toAtack(); 
  
  const hero2 = new hero('Felipao', 150, 'mago');
  hero2.toAtack(); 
  
  const hero3 = new hero('Diego', 35, 'monge');
  hero3.toAtack(); 
  
  const hero4 = new hero('Antonio', 20, 'ninja');
  hero4.toAtack(); 
  