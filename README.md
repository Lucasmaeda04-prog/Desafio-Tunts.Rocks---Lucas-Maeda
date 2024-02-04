# Projeto: Desafio de Engenharia de Software - Lucas Masaki Maeda

Este projeto Google Apps Script automatiza a avaliação acadêmica dos alunos em uma disciplina de Engenharia de Software. A aplicação calcula a situação final de cada aluno com base nas notas de três provas (P1, P2, P3) e no número de faltas, aplicando critérios específicos para determinar se os alunos estão Aprovados, em Exame Final, ou Reprovados por Nota ou Falta.

## 📝 Funcionalidades

- **Cálculo da Média das Notas:** Calcula a média das notas (P1, P2, P3) para cada aluno.
- **Determinação da Situação Acadêmica:** Classifica cada aluno como `Aprovado`, `Exame Final`, ou `Reprovado por Nota`, baseando-se na média calculada.
- **Verificação de Faltas:** Identifica alunos com faltas acima de 25% do total de aulas como `Reprovado por Falta`, independente da média.
- **Cálculo da Nota para Aprovação Final (NAF):** Para alunos em Exame Final, o script calcula a nota necessária para aprovação.

## 🚀 Como Usar

### Acessando a Web App

1. Acesse a Web App pelo seguinte link: [Link da Web App](https://script.google.com/macros/s/AKfycbxOJlfWPjydXSkNlFjg_6rzAFOzBYjv-Aoz37WeiWHMQK_oDFbWdvVswcyH4MTvN9IF9A/exec)
2. É mostrado na interface da Web App a tabela resultante gerada.
3. Para "resetar" a planilha ao seu estado original utilize o link : [Link da Web App](https://script.google.com/macros/s/AKfycbz34AKMCtGvmf3-NkFAbx4qOQ6TW8nghJxLjfRgnCM8U3DXMyhlFE0IDSZM6K94drLc/exec)

### Executando Diretamente no Editor do Apps Script

Caso deseja visualizar os Logs ou executar/modificar o script diretamente:

1. Na cópia da planilha, vá em `Extensões > Apps Script`.
2. Substitua qualquer código existente pelo código do projeto e salve.
3. Execute a função `doGet` para visualizar os resultados.

## 📊 Regras de Avaliação

- **Média < 5:** Aluno(a) Reprovado(a) por Nota.
- **5 ≤ Média < 7:** Aluno(a) em Exame Final.
- **Média ≥ 7:** Aluno(a) Aprovado(a).
- **Faltas > 25% das aulas:** Aluno(a) Reprovado(a) por Falta, independente da média.
