import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Repositories() {
    const history = useHistory();
    const [ Repositories, setRepositories ] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
            //console.log(repositoriesName);
        } else {
            history.push('/')
        }
    }, []);
   
    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { Repositories.map(Repository => {
                    return (
                        <S.ListItem>Repositório: { Repository }</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}