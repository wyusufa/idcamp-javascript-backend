// OBJECT COMPOSITION (2)

// Membuat kumpulan attribute, generic method, dan spesific method menjadi satu objek.

const YourClassName = (paramA, paramB) => {
    const self = {
      paramA,
      paramB
    };
    
    const yourSpecificActions = self => ({
      specificActionA: { /** do action A **/},
    });
    
    return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
  }


