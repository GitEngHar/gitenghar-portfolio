import {atom} from 'jotai'

interface Projects {
    title: string
    image_path: string
    details: string
    project_url: string
}

export const projects = atom<Projects>