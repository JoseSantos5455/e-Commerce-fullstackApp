
export default function validate (input){
    const errors = {};
    
    if(typeof input.country !== 'string'){
        errors.country = 'Can´t contain special characters'
    }
    if (!input.country) {
        errors.country = 'Enter a valid country';
      }

    if(input.address_st === null ){
        errors.address_st = 'Invalid street name'
      }
      else if(typeof input.address_st !== 'string' ){
        errors.address_st = 'Can not contain special characters'
      }
    if(!input.address_num){
        errors.address_num = 'Add a valid address number'
      }
      if(typeof input.address_num != 'string'){
          errors.address_num = 'Must be a number'
        }
    if(!input.department){
        errors.department = 'Add a valid apartment number or 0'
      }
      if(typeof input.department !== 'string'){
          errors.department = 'Must be a number'
        }
        else if (input.department.toString().length > 3) {
            errors.department = 'Add a vabblid department number';
          }
    if(!input.zip){
        errors.zip = 'Add a valid zip number'
      }
      if(typeof input.zip !== 'string'){
          errors.zip = 'ZIP Must be a number'
        }
        else if (!/^\d{3,5}$/.test(input.zip)) {
         errors.zip = 'Add a valid zip number';  
          }
      
      return errors;
}