
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_ProdCharacteristic, IProdCharacteristic} from './RTTI_ProdCharacteristic';




            export interface IMedicinalProductManufactured {
                
                    /**
                     * This is a MedicinalProductManufactured resource
                     */
                    resourceType: 'MedicinalProductManufactured';
                    

                    /**
                     * Dose form as manufactured and before any transformation into the pharmaceutical product.
                     */
                    manufacturedDoseForm : ICodeableConcept;
                    

                    /**
                     * The quantity or "count number" of the manufactured item.
                     */
                    quantity : IQuantity;
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The “real world” units in which the quantity of the manufactured item is described.
                     */
                    unitOfPresentation? : ICodeableConcept;
                    

                    /**
                     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
                     */
                    manufacturer? : IReference[];
                    

                    /**
                     * Ingredient.
                     */
                    ingredient? : IReference[];
                    

                    /**
                     * Dimensions, color etc.
                     */
                    physicalCharacteristics? : IProdCharacteristic;
                    

                    /**
                     * Other codeable characteristics.
                     */
                    otherCharacteristics? : ICodeableConcept[];
                    
            }
        


        export const RTTI_MedicinalProductManufactured: t.Type<IMedicinalProductManufactured> = t.recursion( 'IMedicinalProductManufactured', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('MedicinalProductManufactured'),
manufacturedDoseForm: RTTI_CodeableConcept,
quantity: RTTI_Quantity
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
unitOfPresentation: RTTI_CodeableConcept,
manufacturer: t.array(RTTI_Reference),
ingredient: t.array(RTTI_Reference),
physicalCharacteristics: RTTI_ProdCharacteristic,
otherCharacteristics: t.array(RTTI_CodeableConcept)
        })
        
            ])
        );
        

        