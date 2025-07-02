import {atom} from 'jotai'

interface Project {
    title: string
    image_path: string
    details: string
    project_url: string
}

export const projectsAtom = atom<Project[]>([])