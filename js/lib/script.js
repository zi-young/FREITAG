


let $nameMes=document.getElementById('nameMes');

// 이름
$name.addEventListener('blur', function(){
    if(regname.test($name.value)){
        $nameMes.innerHTML=""
    }else{
        alert('이름을 확인하세요.(한글 2~4자 이내)');
        $('#nameMes').focus();
        return false;
        }
    }
)

