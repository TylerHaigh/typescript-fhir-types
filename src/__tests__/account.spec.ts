import { RTTI_Account } from "../Resource/RTTI_Account";

describe('Account', () => {
  test('should decode a valid object', () => {
      const result = RTTI_Account.decode({
        "resourceType": "StructureDefinition",
        "id": "Account",
        "meta": {
          "lastUpdated": "2018-12-27T22:37:54.724+11:00"
        },
        "text": {
          "status": "generated"
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-category",
            "valueString": "Financial.General"
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
            "valueCode": "trial-use"
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
            "valueInteger": 2
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-security-category",
            "valueCode": "patient"
          },
          {
            "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
            "valueCode": "pa"
          }
        ],
        "url": "http://hl7.org/fhir/StructureDefinition/Account",
        "version": "4.0.0",
        "name": "Account",
        "status": "draft",
        "date": "2018-12-27T22:37:54+11:00",
        "publisher": "Health Level Seven International (Patient Administration)",
        "contact": [
          {
            "telecom": [
              {
                "system": "url",
                "value": "http://hl7.org/fhir"
              }
            ]
          },
          {
            "telecom": [
              {
                "system": "url",
                "value": "http://www.hl7.org/Special/committees/pafm/index.cfm"
              }
            ]
          }
        ],
        "description": "A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.",
        "fhirVersion": "4.0.0",
        "mapping": [
          {
            "identity": "rim",
            "uri": "http://hl7.org/v3",
            "name": "RIM Mapping"
          },
          {
            "identity": "w5",
            "uri": "http://hl7.org/fhir/fivews",
            "name": "FiveWs Pattern Mapping"
          }
        ],
        "kind": "resource",
        "abstract": false,
        "type": "Account",
        "baseDefinition": "http://hl7.org/fhir/StructureDefinition/DomainResource",
        "derivation": "specialization",
        "snapshot": {
          "element": [
            {
              "id": "Account",
              "path": "Account",
              "short": "Tracks balance, charges, for patient or cost center",
              "definition": "A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.",
              "alias": [
                "Cost center",
                "Record"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "Account",
                "min": 0,
                "max": "*"
              },
              "constraint": [
                {
                  "key": "dom-2",
                  "severity": "error",
                  "human": "If the resource is contained in another resource, it SHALL NOT contain nested Resources",
                  "expression": "contained.contained.empty()",
                  "xpath": "not(parent::f:contained and f:contained)",
                  "source": "DomainResource"
                },
                {
                  "key": "dom-4",
                  "severity": "error",
                  "human": "If a resource is contained in another resource, it SHALL NOT have a meta.versionId or a meta.lastUpdated",
                  "expression": "contained.meta.versionId.empty() and contained.meta.lastUpdated.empty()",
                  "xpath": "not(exists(f:contained/*/f:meta/f:versionId)) and not(exists(f:contained/*/f:meta/f:lastUpdated))",
                  "source": "DomainResource"
                },
                {
                  "key": "dom-3",
                  "severity": "error",
                  "human": "If the resource is contained in another resource, it SHALL be referred to from elsewhere in the resource or SHALL refer to the containing resource",
                  "expression": "contained.where(((\u0027#\u0027+id in (%resource.descendants().reference | %resource.descendants().as(canonical) | %resource.descendants().as(uri) | %resource.descendants().as(url))) or descendants().where(reference \u003d \u0027#\u0027).exists() or descendants().where(as(canonical) \u003d \u0027#\u0027).exists() or descendants().where(as(canonical) \u003d \u0027#\u0027).exists()).not()).trace(\u0027unmatched\u0027, id).empty()",
                  "xpath": "not(exists(for $contained in f:contained return $contained[not(parent::*/descendant::f:reference/@value\u003dconcat(\u0027#\u0027, $contained/*/id/@value) or descendant::f:reference[@value\u003d\u0027#\u0027])]))",
                  "source": "DomainResource"
                },
                {
                  "extension": [
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice",
                      "valueBoolean": true
                    },
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bestpractice-explanation",
                      "valueMarkdown": "When a resource has no narrative, only systems that fully understand the data can display the resource to a human safely. Including a human readable representation in the resource makes for a much more robust eco-system and cheaper handling of resources by intermediary systems. Some ecosystems restrict distribution of resources to only those systems that do fully understand the resources, and as a consequence implementers may believe that the narrative is superfluous. However experience shows that such eco-systems often open up to new participants over time."
                    }
                  ],
                  "key": "dom-6",
                  "severity": "warning",
                  "human": "A resource should have narrative for robust management",
                  "expression": "text.div.exists()",
                  "xpath": "exists(f:text/h:div)",
                  "source": "DomainResource"
                },
                {
                  "key": "dom-5",
                  "severity": "error",
                  "human": "If a resource is contained in another resource, it SHALL NOT have a security label",
                  "expression": "contained.meta.security.empty()",
                  "xpath": "not(exists(f:contained/*/f:meta/f:security))",
                  "source": "DomainResource"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "Entity. Role, or Act"
                },
                {
                  "identity": "rim",
                  "map": "Account"
                }
              ]
            },
            {
              "id": "Account.id",
              "path": "Account.id",
              "short": "Logical id of this artifact",
              "definition": "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
              "comment": "The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Resource.id",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "id"
                }
              ],
              "isModifier": false,
              "isSummary": true
            },
            {
              "id": "Account.meta",
              "path": "Account.meta",
              "short": "Metadata about the resource",
              "definition": "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Resource.meta",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "Meta"
                }
              ],
              "isModifier": false,
              "isSummary": true
            },
            {
              "id": "Account.implicitRules",
              "path": "Account.implicitRules",
              "short": "A set of rules under which this content was created",
              "definition": "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
              "comment": "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it\u0027s narrative along with other profiles, value sets, etc.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Resource.implicitRules",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "uri"
                }
              ],
              "isModifier": true,
              "isModifierReason": "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it\u0027s meaning or interpretation",
              "isSummary": true
            },
            {
              "id": "Account.language",
              "path": "Account.language",
              "short": "Language of the resource content",
              "definition": "The base language in which the resource is written.",
              "comment": "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Resource.language",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "code"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "binding": {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
                    "valueCanonical": "http://hl7.org/fhir/ValueSet/all-languages"
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
                    "valueString": "Language"
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
                    "valueBoolean": true
                  }
                ],
                "strength": "preferred",
                "description": "A human language.",
                "valueSet": "http://hl7.org/fhir/ValueSet/languages"
              }
            },
            {
              "id": "Account.text",
              "path": "Account.text",
              "short": "Text summary of the resource, for human interpretation",
              "definition": "A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
              "comment": "Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs\u003d1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a \"text blob\" or where text is additionally entered raw or narrated and encoded information is added later.",
              "alias": [
                "narrative",
                "html",
                "xhtml",
                "display"
              ],
              "min": 0,
              "max": "1",
              "base": {
                "path": "DomainResource.text",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "Narrative"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "Act.text?"
                }
              ]
            },
            {
              "id": "Account.contained",
              "path": "Account.contained",
              "short": "Contained, inline Resources",
              "definition": "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
              "comment": "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.",
              "alias": [
                "inline resources",
                "anonymous resources",
                "contained resources"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "DomainResource.contained",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Resource"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "N/A"
                }
              ]
            },
            {
              "id": "Account.extension",
              "path": "Account.extension",
              "short": "Additional content defined by implementations",
              "definition": "May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
              "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
              "alias": [
                "extensions",
                "user content"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "DomainResource.extension",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Extension"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "N/A"
                }
              ]
            },
            {
              "id": "Account.modifierExtension",
              "path": "Account.modifierExtension",
              "short": "Extensions that cannot be ignored",
              "definition": "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element\u0027s descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
              "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
              "requirements": "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
              "alias": [
                "extensions",
                "user content"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "DomainResource.modifierExtension",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Extension"
                }
              ],
              "isModifier": true,
              "isModifierReason": "Modifier extensions are expected to modify the meaning or interpretation of the resource that contains them",
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "N/A"
                }
              ]
            },
            {
              "id": "Account.identifier",
              "path": "Account.identifier",
              "short": "Account number",
              "definition": "Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).",
              "min": 0,
              "max": "*",
              "base": {
                "path": "Account.identifier",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Identifier"
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.identifier"
                },
                {
                  "identity": "rim",
                  "map": ".id"
                }
              ]
            },
            {
              "id": "Account.status",
              "path": "Account.status",
              "short": "active | inactive | entered-in-error | on-hold | unknown",
              "definition": "Indicates whether the account is presently used/usable or not.",
              "comment": "This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.",
              "min": 1,
              "max": "1",
              "base": {
                "path": "Account.status",
                "min": 1,
                "max": "1"
              },
              "type": [
                {
                  "code": "code"
                }
              ],
              "isModifier": true,
              "isModifierReason": "This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid",
              "isSummary": true,
              "binding": {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
                    "valueString": "AccountStatus"
                  }
                ],
                "strength": "required",
                "description": "Indicates whether the account is available to be used.",
                "valueSet": "http://hl7.org/fhir/ValueSet/account-status|4.0.0"
              },
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.status"
                },
                {
                  "identity": "rim",
                  "map": ".statusCode"
                }
              ]
            },
            {
              "id": "Account.type",
              "path": "Account.type",
              "short": "E.g. patient, expense, depreciation",
              "definition": "Categorizes the account for reporting and searching purposes.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.type",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "CodeableConcept"
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "binding": {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
                    "valueString": "AccountType"
                  }
                ],
                "strength": "example",
                "description": "The usage type of this account, permits categorization of accounts.",
                "valueSet": "http://hl7.org/fhir/ValueSet/account-type"
              },
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.class"
                },
                {
                  "identity": "rim",
                  "map": ".code"
                }
              ]
            },
            {
              "id": "Account.name",
              "path": "Account.name",
              "short": "Human-readable label",
              "definition": "Name used for the account when displaying it to humans in reports, etc.",
              "alias": [
                "Title"
              ],
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.name",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "string"
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.what[x]"
                },
                {
                  "identity": "rim",
                  "map": ".title"
                }
              ]
            },
            {
              "id": "Account.subject",
              "path": "Account.subject",
              "short": "The entity that caused the expenses",
              "definition": "Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account.",
              "comment": "Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.",
              "alias": [
                "target"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "Account.subject",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Patient",
                    "http://hl7.org/fhir/StructureDefinition/Device",
                    "http://hl7.org/fhir/StructureDefinition/Practitioner",
                    "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
                    "http://hl7.org/fhir/StructureDefinition/Location",
                    "http://hl7.org/fhir/StructureDefinition/HealthcareService",
                    "http://hl7.org/fhir/StructureDefinition/Organization"
                  ]
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.subject[x]"
                },
                {
                  "identity": "rim",
                  "map": ".subject"
                },
                {
                  "identity": "w5",
                  "map": "FiveWs.subject"
                }
              ]
            },
            {
              "id": "Account.servicePeriod",
              "path": "Account.servicePeriod",
              "short": "Transaction window",
              "definition": "The date range of services associated with this account.",
              "comment": "It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.servicePeriod",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "Period"
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.done[x]"
                },
                {
                  "identity": "rim",
                  "map": ".coverage.insurancePolicy.effectiveTime"
                }
              ]
            },
            {
              "id": "Account.coverage",
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
                  "valueString": "Coverage"
                }
              ],
              "path": "Account.coverage",
              "short": "The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account",
              "definition": "The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.",
              "comment": "Typically. this may be some form of insurance, internal charges, or self-pay.\n\nLocal or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.\nWhere the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.",
              "min": 0,
              "max": "*",
              "base": {
                "path": "Account.coverage",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "BackboneElement"
                }
              ],
              "constraint": [
                {
                  "key": "ele-1",
                  "severity": "error",
                  "human": "All FHIR elements must have a @value or children",
                  "expression": "hasValue() or (children().count() \u003e id.count())",
                  "xpath": "@value|f:*|h:div",
                  "source": "Element"
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".coverage"
                }
              ]
            },
            {
              "id": "Account.coverage.id",
              "path": "Account.coverage.id",
              "representation": [
                "xmlAttr"
              ],
              "short": "Unique id for inter-element referencing",
              "definition": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Element.id",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "string"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "n/a"
                }
              ]
            },
            {
              "id": "Account.coverage.extension",
              "path": "Account.coverage.extension",
              "short": "Additional content defined by implementations",
              "definition": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
              "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
              "alias": [
                "extensions",
                "user content"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "Element.extension",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Extension"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "n/a"
                }
              ]
            },
            {
              "id": "Account.coverage.modifierExtension",
              "path": "Account.coverage.modifierExtension",
              "short": "Extensions that cannot be ignored even if unrecognized",
              "definition": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element\u0027s descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
              "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
              "requirements": "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
              "alias": [
                "extensions",
                "user content",
                "modifiers"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "BackboneElement.modifierExtension",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Extension"
                }
              ],
              "isModifier": true,
              "isModifierReason": "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "N/A"
                }
              ]
            },
            {
              "id": "Account.coverage.coverage",
              "path": "Account.coverage.coverage",
              "short": "The party(s), such as insurances, that may contribute to the payment of this account",
              "definition": "The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).\n\nA coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.",
              "min": 1,
              "max": "1",
              "base": {
                "path": "Account.coverage.coverage",
                "min": 1,
                "max": "1"
              },
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Coverage"
                  ]
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".coverage.insurancePolicy.author"
                }
              ]
            },
            {
              "id": "Account.coverage.priority",
              "path": "Account.coverage.priority",
              "short": "The priority of the coverage in the context of this account",
              "definition": "The priority of the coverage in the context of this account.",
              "comment": "It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).",
              "alias": [
                "coordination of benefit priority"
              ],
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.coverage.priority",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "positiveInt"
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".coverage.sequenceNumber"
                }
              ]
            },
            {
              "id": "Account.owner",
              "path": "Account.owner",
              "short": "Entity managing the Account",
              "definition": "Indicates the service area, hospital, department, etc. with responsibility for managing the Account.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.owner",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Organization"
                  ]
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder"
                }
              ]
            },
            {
              "id": "Account.description",
              "path": "Account.description",
              "short": "Explanation of purpose/use",
              "definition": "Provides additional information about what the account tracks and how it is used.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.description",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "string"
                }
              ],
              "isModifier": false,
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".subjectOf.observationEvent[code\u003d\"annotation\"].value"
                }
              ]
            },
            {
              "id": "Account.guarantor",
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
                  "valueString": "Guarantor"
                }
              ],
              "path": "Account.guarantor",
              "short": "The parties ultimately responsible for balancing the Account",
              "definition": "The parties responsible for balancing the account if other payment options fall short.",
              "min": 0,
              "max": "*",
              "base": {
                "path": "Account.guarantor",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "BackboneElement"
                }
              ],
              "constraint": [
                {
                  "key": "ele-1",
                  "severity": "error",
                  "human": "All FHIR elements must have a @value or children",
                  "expression": "hasValue() or (children().count() \u003e id.count())",
                  "xpath": "@value|f:*|h:div",
                  "source": "Element"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole"
                }
              ]
            },
            {
              "id": "Account.guarantor.id",
              "path": "Account.guarantor.id",
              "representation": [
                "xmlAttr"
              ],
              "short": "Unique id for inter-element referencing",
              "definition": "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Element.id",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "string"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "n/a"
                }
              ]
            },
            {
              "id": "Account.guarantor.extension",
              "path": "Account.guarantor.extension",
              "short": "Additional content defined by implementations",
              "definition": "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
              "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
              "alias": [
                "extensions",
                "user content"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "Element.extension",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Extension"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "n/a"
                }
              ]
            },
            {
              "id": "Account.guarantor.modifierExtension",
              "path": "Account.guarantor.modifierExtension",
              "short": "Extensions that cannot be ignored even if unrecognized",
              "definition": "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element\u0027s descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
              "comment": "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
              "requirements": "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
              "alias": [
                "extensions",
                "user content",
                "modifiers"
              ],
              "min": 0,
              "max": "*",
              "base": {
                "path": "BackboneElement.modifierExtension",
                "min": 0,
                "max": "*"
              },
              "type": [
                {
                  "code": "Extension"
                }
              ],
              "isModifier": true,
              "isModifierReason": "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": "N/A"
                }
              ]
            },
            {
              "id": "Account.guarantor.party",
              "path": "Account.guarantor.party",
              "short": "Responsible entity",
              "definition": "The entity who is responsible.",
              "min": 1,
              "max": "1",
              "base": {
                "path": "Account.guarantor.party",
                "min": 1,
                "max": "1"
              },
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Patient",
                    "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
                    "http://hl7.org/fhir/StructureDefinition/Organization"
                  ]
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole[guarantorPerson|guarantorOrganization]"
                }
              ]
            },
            {
              "id": "Account.guarantor.onHold",
              "path": "Account.guarantor.onHold",
              "short": "Credit or other hold applied",
              "definition": "A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.guarantor.onHold",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "boolean"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole.statusCode"
                }
              ]
            },
            {
              "id": "Account.guarantor.period",
              "path": "Account.guarantor.period",
              "short": "Guarantee account during",
              "definition": "The timeframe during which the guarantor accepts responsibility for the account.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.guarantor.period",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "Period"
                }
              ],
              "isModifier": false,
              "isSummary": false,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole.effectiveTime"
                }
              ]
            },
            {
              "id": "Account.partOf",
              "path": "Account.partOf",
              "short": "Reference to a parent Account",
              "definition": "Reference to a parent Account.",
              "min": 0,
              "max": "1",
              "base": {
                "path": "Account.partOf",
                "min": 0,
                "max": "1"
              },
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Account"
                  ]
                }
              ],
              "isModifier": false,
              "isSummary": false
            }
          ]
        },
        "differential": {
          "element": [
            {
              "id": "Account",
              "path": "Account",
              "short": "Tracks balance, charges, for patient or cost center",
              "definition": "A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.",
              "alias": [
                "Cost center",
                "Record"
              ],
              "min": 0,
              "max": "*",
              "mapping": [
                {
                  "identity": "rim",
                  "map": "Account"
                }
              ]
            },
            {
              "id": "Account.identifier",
              "path": "Account.identifier",
              "short": "Account number",
              "definition": "Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).",
              "min": 0,
              "max": "*",
              "type": [
                {
                  "code": "Identifier"
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.identifier"
                },
                {
                  "identity": "rim",
                  "map": ".id"
                }
              ]
            },
            {
              "id": "Account.status",
              "path": "Account.status",
              "short": "active | inactive | entered-in-error | on-hold | unknown",
              "definition": "Indicates whether the account is presently used/usable or not.",
              "comment": "This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.",
              "min": 1,
              "max": "1",
              "type": [
                {
                  "code": "code"
                }
              ],
              "isModifier": true,
              "isModifierReason": "This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid",
              "isSummary": true,
              "binding": {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
                    "valueString": "AccountStatus"
                  }
                ],
                "strength": "required",
                "description": "Indicates whether the account is available to be used.",
                "valueSet": "http://hl7.org/fhir/ValueSet/account-status|4.0.0"
              },
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.status"
                },
                {
                  "identity": "rim",
                  "map": ".statusCode"
                }
              ]
            },
            {
              "id": "Account.type",
              "path": "Account.type",
              "short": "E.g. patient, expense, depreciation",
              "definition": "Categorizes the account for reporting and searching purposes.",
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "CodeableConcept"
                }
              ],
              "isSummary": true,
              "binding": {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
                    "valueString": "AccountType"
                  }
                ],
                "strength": "example",
                "description": "The usage type of this account, permits categorization of accounts.",
                "valueSet": "http://hl7.org/fhir/ValueSet/account-type"
              },
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.class"
                },
                {
                  "identity": "rim",
                  "map": ".code"
                }
              ]
            },
            {
              "id": "Account.name",
              "path": "Account.name",
              "short": "Human-readable label",
              "definition": "Name used for the account when displaying it to humans in reports, etc.",
              "alias": [
                "Title"
              ],
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "string"
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.what[x]"
                },
                {
                  "identity": "rim",
                  "map": ".title"
                }
              ]
            },
            {
              "id": "Account.subject",
              "path": "Account.subject",
              "short": "The entity that caused the expenses",
              "definition": "Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account.",
              "comment": "Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.",
              "alias": [
                "target"
              ],
              "min": 0,
              "max": "*",
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Patient",
                    "http://hl7.org/fhir/StructureDefinition/Device",
                    "http://hl7.org/fhir/StructureDefinition/Practitioner",
                    "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
                    "http://hl7.org/fhir/StructureDefinition/Location",
                    "http://hl7.org/fhir/StructureDefinition/HealthcareService",
                    "http://hl7.org/fhir/StructureDefinition/Organization"
                  ]
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.subject[x]"
                },
                {
                  "identity": "rim",
                  "map": ".subject"
                },
                {
                  "identity": "w5",
                  "map": "FiveWs.subject"
                }
              ]
            },
            {
              "id": "Account.servicePeriod",
              "path": "Account.servicePeriod",
              "short": "Transaction window",
              "definition": "The date range of services associated with this account.",
              "comment": "It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.",
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "Period"
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "w5",
                  "map": "FiveWs.done[x]"
                },
                {
                  "identity": "rim",
                  "map": ".coverage.insurancePolicy.effectiveTime"
                }
              ]
            },
            {
              "id": "Account.coverage",
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
                  "valueString": "Coverage"
                }
              ],
              "path": "Account.coverage",
              "short": "The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account",
              "definition": "The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account.",
              "comment": "Typically. this may be some form of insurance, internal charges, or self-pay.\n\nLocal or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.\nWhere the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.",
              "min": 0,
              "max": "*",
              "type": [
                {
                  "code": "BackboneElement"
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".coverage"
                }
              ]
            },
            {
              "id": "Account.coverage.coverage",
              "path": "Account.coverage.coverage",
              "short": "The party(s), such as insurances, that may contribute to the payment of this account",
              "definition": "The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).\n\nA coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.",
              "min": 1,
              "max": "1",
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Coverage"
                  ]
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".coverage.insurancePolicy.author"
                }
              ]
            },
            {
              "id": "Account.coverage.priority",
              "path": "Account.coverage.priority",
              "short": "The priority of the coverage in the context of this account",
              "definition": "The priority of the coverage in the context of this account.",
              "comment": "It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).",
              "alias": [
                "coordination of benefit priority"
              ],
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "positiveInt"
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".coverage.sequenceNumber"
                }
              ]
            },
            {
              "id": "Account.owner",
              "path": "Account.owner",
              "short": "Entity managing the Account",
              "definition": "Indicates the service area, hospital, department, etc. with responsibility for managing the Account.",
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Organization"
                  ]
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder"
                }
              ]
            },
            {
              "id": "Account.description",
              "path": "Account.description",
              "short": "Explanation of purpose/use",
              "definition": "Provides additional information about what the account tracks and how it is used.",
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "string"
                }
              ],
              "isSummary": true,
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".subjectOf.observationEvent[code\u003d\"annotation\"].value"
                }
              ]
            },
            {
              "id": "Account.guarantor",
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name",
                  "valueString": "Guarantor"
                }
              ],
              "path": "Account.guarantor",
              "short": "The parties ultimately responsible for balancing the Account",
              "definition": "The parties responsible for balancing the account if other payment options fall short.",
              "min": 0,
              "max": "*",
              "type": [
                {
                  "code": "BackboneElement"
                }
              ],
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole"
                }
              ]
            },
            {
              "id": "Account.guarantor.party",
              "path": "Account.guarantor.party",
              "short": "Responsible entity",
              "definition": "The entity who is responsible.",
              "min": 1,
              "max": "1",
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Patient",
                    "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
                    "http://hl7.org/fhir/StructureDefinition/Organization"
                  ]
                }
              ],
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole[guarantorPerson|guarantorOrganization]"
                }
              ]
            },
            {
              "id": "Account.guarantor.onHold",
              "path": "Account.guarantor.onHold",
              "short": "Credit or other hold applied",
              "definition": "A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.",
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "boolean"
                }
              ],
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole.statusCode"
                }
              ]
            },
            {
              "id": "Account.guarantor.period",
              "path": "Account.guarantor.period",
              "short": "Guarantee account during",
              "definition": "The timeframe during which the guarantor accepts responsibility for the account.",
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "Period"
                }
              ],
              "mapping": [
                {
                  "identity": "rim",
                  "map": ".holder.guarantorRole.effectiveTime"
                }
              ]
            },
            {
              "id": "Account.partOf",
              "path": "Account.partOf",
              "short": "Reference to a parent Account",
              "definition": "Reference to a parent Account.",
              "min": 0,
              "max": "1",
              "type": [
                {
                  "code": "Reference",
                  "targetProfile": [
                    "http://hl7.org/fhir/StructureDefinition/Account"
                  ]
                }
              ]
            }
          ]
        }
      });
      expect(result._tag).toBe('Right')
  
  })


})