const germanDictionary = new Intl.Collator('de-DE-u-co-dict');
 
// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"