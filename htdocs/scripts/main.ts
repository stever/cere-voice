/// <reference path="../typedefs/require.d.ts" />
/// <reference path="../typedefs/jquery.d.ts" />
/// <reference path="../typedefs/riotjs.d.ts" />
/// <reference path="../typedefs/riotjs-render.d.ts"/>

require(['text!templates/index.html!strip'], (t) => {
    $('body').append($.render(t));

    // Focus first form element.
    $('#cerevoiceCloudForm :input:visible:first').focus();

    // Handle form.
    $('#cerevoiceCloudForm').submit((e) => {
        e.preventDefault();

        // Get the form variables.
        var inputs = $('#cerevoiceCloudForm :input');
        var values: { [index: string]: any; } = {};
        inputs.each(function () {
            values[this.name] = $(this).val();
            $(this).val('');
        });

        var text = values['text'];
        var voice = values['voice'];
        console.log('Say "' + text + '" in the', voice, 'voice.');

        var method = values['method'];
        var accountId = values['accountID'];
        var password = values['password'];
        var audioFormat = values['audioFormat'];
        var sampleRate = values['sampleRate'];
        var audio3D = values['audio3D'];
        var metadata = values['metadata'];

        var req = 'https://cerevoice.com/rest/rest_1_1.php'
            + '?text=' + encodeURIComponent(text)
            + '&voice=' + encodeURIComponent(voice)
            + '&method=' + encodeURIComponent(method)
            + '&accountID=' + encodeURIComponent(accountId)
            + '&password=' + encodeURIComponent(password)
            + '&audioFormat=' + encodeURIComponent(audioFormat)
            + '&sampleRate=' + encodeURIComponent(sampleRate)
            + '&audio3D=' + encodeURIComponent(audio3D)
            + '&metadata=' + encodeURIComponent(metadata)
        ;

        console.log(req);

        $.ajax({
            url: req,
        }).done((data) => {
            console.log(data);
        });
    });
});
