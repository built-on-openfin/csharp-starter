namespace Winforms.Notification.Client
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnConnectToChannel = new System.Windows.Forms.Button();
            this.btnSimpleNotification = new System.Windows.Forms.Button();
            this.btnUserInputNotification = new System.Windows.Forms.Button();
            this.panel1 = new System.Windows.Forms.Panel();
            this.txtStatus = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnConnectToChannel
            // 
            this.btnConnectToChannel.Location = new System.Drawing.Point(64, 35);
            this.btnConnectToChannel.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btnConnectToChannel.Name = "btnConnectToChannel";
            this.btnConnectToChannel.Size = new System.Drawing.Size(297, 38);
            this.btnConnectToChannel.TabIndex = 0;
            this.btnConnectToChannel.Text = "Connect To Channel";
            this.btnConnectToChannel.UseVisualStyleBackColor = true;
            this.btnConnectToChannel.Click += new System.EventHandler(this.btnConnectToChannel_Click);
            // 
            // btnSimpleNotification
            // 
            this.btnSimpleNotification.Enabled = false;
            this.btnSimpleNotification.Location = new System.Drawing.Point(64, 83);
            this.btnSimpleNotification.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btnSimpleNotification.Name = "btnSimpleNotification";
            this.btnSimpleNotification.Size = new System.Drawing.Size(297, 38);
            this.btnSimpleNotification.TabIndex = 2;
            this.btnSimpleNotification.Text = "Send Simple Notification";
            this.btnSimpleNotification.UseVisualStyleBackColor = true;
            this.btnSimpleNotification.Click += new System.EventHandler(this.btnSimpleNotification_Click);
            // 
            // btnUserInputNotification
            // 
            this.btnUserInputNotification.Enabled = false;
            this.btnUserInputNotification.Location = new System.Drawing.Point(64, 132);
            this.btnUserInputNotification.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.btnUserInputNotification.Name = "btnUserInputNotification";
            this.btnUserInputNotification.Size = new System.Drawing.Size(297, 38);
            this.btnUserInputNotification.TabIndex = 3;
            this.btnUserInputNotification.Text = "Send Notification - User Input";
            this.btnUserInputNotification.UseVisualStyleBackColor = true;
            this.btnUserInputNotification.Click += new System.EventHandler(this.btnUserInputNotification_Click);
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.label1);
            this.panel1.Controls.Add(this.btnConnectToChannel);
            this.panel1.Controls.Add(this.btnUserInputNotification);
            this.panel1.Controls.Add(this.btnSimpleNotification);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Top;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(1053, 215);
            this.panel1.TabIndex = 5;
            // 
            // txtStatus
            // 
            this.txtStatus.Dock = System.Windows.Forms.DockStyle.Fill;
            this.txtStatus.Location = new System.Drawing.Point(0, 215);
            this.txtStatus.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.txtStatus.Multiline = true;
            this.txtStatus.Name = "txtStatus";
            this.txtStatus.ReadOnly = true;
            this.txtStatus.Size = new System.Drawing.Size(1053, 610);
            this.txtStatus.TabIndex = 6;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(1018, 8);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(31, 25);
            this.label1.TabIndex = 4;
            this.label1.Text = "v2";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1053, 825);
            this.Controls.Add(this.txtStatus);
            this.Controls.Add(this.panel1);
            this.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.Name = "Form1";
            this.Text = "Form1";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button btnConnectToChannel;
        private Button btnSimpleNotification;
        private Button btnUserInputNotification;
        private Panel panel1;
        private TextBox txtStatus;
        private Label label1;
    }
}