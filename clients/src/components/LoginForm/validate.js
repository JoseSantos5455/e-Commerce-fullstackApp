import { number } from "prop-types";

export default function validate (input){
    const errors = {};
    
    if(typeof input.country !== 'string'){
        errors.country = 'Can´t contain special characters'
    }
    if (!input.country) {
        errors.country = 'Enter a valid country';
      }

    if(input.adress_st === null ){
        errors.adress_st = 'Invalid street name'
      }
      else if(typeof input.adress_st !== 'string' ){
        errors.adress_st = 'Can not contain special characters'
      }
    if(!input.adress_num){
        errors.adress_num = 'Add a valid adress number'
      }
      if(typeof input.adress_num != 'string'){
          errors.adress_num = 'Must be a number'
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