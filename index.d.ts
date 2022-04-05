export interface Phenotype {
    af_alt:                  number;
    af_alt_cases:            number;
    af_alt_controls:         number;
    beta:                    number;
    category:                string;
    category_index:          number;
    gc_lambda:               { [key: string]: number };
    mlogp:                   number;
    n_het_cases:             number;
    n_het_controls:          number;
    n_hom_cases:             number;
    n_hom_controls:          number;
    n_hom_ref_cases:         number;
    n_hom_ref_controls:      number;
    num_cases:               number;
    num_cases_prev:          'NA' | number;
    num_controls:            number;
    num_gw_significant:      number;
    num_gw_significant_prev: 'NA' | number;
    phenocode:               string;
    phenostring:             string;
    pval:                    number;
    sebeta:                  number;
}

export type color_map = {[p: string]: string}
export interface Props { colorByCategory : color_map , dataprop : Phenotype }
export function Lavaa(prop : Props): JSX.Element
