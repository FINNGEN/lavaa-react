export interface Phenotype {

    beta:              number | null;
    category:          string;
    category_index? :  number;

    maf:               number | null;
    af_alt?:           number | null;

    matching_results?: MatchingResults;
    mlogp?:            number | null;

    n_case?:           number | null;
    num_cases?:        number | null;
    af_alt_cases?:     number | null;
    maf_case?:         number | null;


    n_control?:        number | null;
    num_control?:      number | null;
    af_alt_controls?:  number | null;
    maf_alt_controls?: number | null;
    maf_control?:      number | null;

    n_sample?:         "NA" | number | string;
    phenocode:         string;
    phenostring:       string;
    pval:              number | null;
    pip?:              number | null;

}

export interface MatchingResults {}

export type color_map = {[p: string]: string}
export interface Props { colorByCategory? : color_map , dataprop : Phenotype[] }
export function Lavaa(prop : Props): JSX.Element
