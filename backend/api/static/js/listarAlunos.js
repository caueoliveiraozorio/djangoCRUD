
async function deletar(id){
    const csrf = document.querySelector("[name=csrfmiddlewaretoken]").value
    const resposta = await apiFetch(`/api/user/${id}`, "DELETE",null,{"X-CSRFToken": csrf})

    // const resposta = await fetch(`/api/alunos/${id}`, {
    //     method:'DELETE'
    // })
    if(resposta.status == 200){
        var linhaAluno = document.getElementById(`aluno-${id}`)
        linhaAluno.remove()
    }

}
