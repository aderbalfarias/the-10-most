import { Question } from "./question.model";

export interface MostViewedStackOverflow {
    items: Question[],
    has_more: boolean,
    quota_max: number;
    quota_remaining: number;
}