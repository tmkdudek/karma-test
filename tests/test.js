describe('Lib-Test',function(){

    beforeEach(function(){
        jQuery('body').append(jQuery('<div>').attr('id','container'));
    })

    afterEach(function(){
        jQuery('#container').remove();
    })

    it('elementById should return existing element',function(){
        jQuery('#container').append(
            jQuery('<div>').attr('id','element').text('element1')
        );


        expect(MyLib.elementById('element')).toBeDefined();
        expect(MyLib.elementById('element').innerHTML).toBe('element1');

    })

    it('elementsByClassName should return array of elements',function(){

        jQuery('#container').append(
                    jQuery('<div>').attr('class','item').text('item1')
                ).append(
                    jQuery('<div>').attr('class','item').text('item2')
                );

        var items = MyLib.elementsByClass('item');

        expect(items.length).toBe(2);
        expect(items[0].innerHTML).toBe('item1');
        expect(items[1].innerHTML).toBe('item2');
    })

    it('indexOf should return position of element in array',function(){
        var arr = ['ala','ma','kota'];

        expect(MyLib.indexOf(arr,'kota')).toBe(2);

    })

    it('trim should delete white chars from beginning and end of string',function(){
        var str = ' przykładowy string  ';
        expect(MyLib.trim(str)).toBe('przykładowy string')

    })

})