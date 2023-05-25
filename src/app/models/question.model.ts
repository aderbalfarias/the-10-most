import { Owner } from "./owner.model";

export interface Question {
    question_id: number;
    tags: any;
    owner: Owner;
    is_answered: boolean;
    view_count: number;
    protected_date: Date;
    accepted_answer_id: number;
    answer_count: number;
    score: number;
    last_activity_date: Date;
    creation_date: Date;
    last_edit_date: Date;
    content_license: string;
    link: string;
    title: string;
}