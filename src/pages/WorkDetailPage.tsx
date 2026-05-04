import { useParams } from 'react-router-dom';
import { projects } from '../lib/projects';
import WorkDetailController from '@/features/work-detail/WorkDetailController';

const WorkDetailPage = () => {
    const { id } = useParams();
    const currentSlug = id || 'lemon-cash';

    const project = projects.find(p => p.slug === currentSlug) || projects[0];

    return <WorkDetailController project={project} />;
};

export default WorkDetailPage;