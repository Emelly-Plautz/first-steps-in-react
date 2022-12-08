export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Apredendo'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                acessar repositórios
            </a>
        </li>
    )
}