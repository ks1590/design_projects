$(document).ready(function(){
    $(document).on('input', '#input-text', function() {
        console.log(checkJaText($('#input-text').val()))
    });
})

function checkJaText(text) {
    try {
        let gmi = 'gmi';
        let regeIncludeHiragana = '^(?=.*[\u3041-\u3096]).*$';
        let regeIncludeKatakana = '^(?=.*[\u30A1-\u30FA]).*$';
        let regeIncludeKanji = '^(?=.*[\u4E00-\u9FFF]).*$';
        let regeHiragana = new RegExp(regeIncludeHiragana, gmi);
        let regeKatakana = new RegExp(regeIncludeKatakana, gmi);
        let regeKanji = new RegExp(regeIncludeKanji, gmi);

        let includeJa = false;
        if (regeHiragana.test(text))
            includeJa = true;
        if (regeKatakana.test(text))
            includeJa = true;
        if (regeKanji.test(text))
            includeJa = true;

        return includeJa;
    } catch (error) {
        alert(error);
    }
}

