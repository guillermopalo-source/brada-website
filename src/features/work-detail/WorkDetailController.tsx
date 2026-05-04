import DefaultLayout from './layouts/DefaultLayout';

interface Props {
    project: any;
}

export default function WorkDetailController({ project }: Props) {
    // Acá en el futuro agregaremos los demás layouts
    switch (project.layout) {
        case "default":
        default:
            return <DefaultLayout project={project} />;
    }
}