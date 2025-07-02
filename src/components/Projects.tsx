import React from 'react';
import { atom, useAtom } from 'jotai';
import {projectsAtom} from "../atom/projects";

interface Project {
    title: string
    image_path: string
    details: string
    project_url: string
}

export const Projects: React.FC = () => {
    const [projects, setProjects] = useAtom(projectsAtom)

    const addDummy = () => {
        const newProject: Project = {
            title: 'New Project',
            image_path: '/path/to/image.png',
            details: '詳細説明',
            project_url: 'https://example.com',
        }
        setProjects(prev => [...prev, newProject])
    }

    return (
        <div>
            <button onClick={addDummy}>プロジェクトを追加</button>
            <ul>
                {projects.map((p, i) => (
                    <li key={i}>
                        <h3>{p.title}</h3>
                        <img src={p.image_path} alt={p.title}/>
                        <p>{p.details}</p>
                        <a href={p.project_url}>リンク</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
