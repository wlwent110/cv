/**
 * Created by admin on 2016/6/15.
 */
function SendEMail(eAddress,password)
{
    var jMail = new ActiveXObject("Jmail.message");
    jMail.Silent = true;
    jMail.Charset = "utf-8";
    jMail.FromName = "ǰ�˹���ʦ-��۳�";    //������
    jMail.From = "[email=1245788423]1245788423@qq.com[/email]";   //�����˵��ʼ���ַ
    jMail.AddRecipient("[email="+eAddress+"]"+eAddress+"[/email]");  //�ռ��˵��ʼ���ַ

    jMail.Subject = "test";
    jMail.Body = "tests";
    jMail.MailServerUserName="[email="+eAddress+"]"+eAddress+"[/email]";
    jMail.MailServerPassWord=password;
    var ret = jMail.Send(eAddress);
    if(ret == false)
    {
        alert("fail");
    }
    else
    {
        alert("success");
    }
    jMail.Close();

}


window.onload = function(){
    var sendEmail = document.getElementById("");

}