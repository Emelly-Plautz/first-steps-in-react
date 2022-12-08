import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name:'Nome',
    description:'Descrição',
    link:'https://www.figma.com/file/ctvNhAtNpRHu9ssfCDg6tO/Projeto1?node-id=0%3A1&t=KSdwbP0pXStMRatT-0'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}