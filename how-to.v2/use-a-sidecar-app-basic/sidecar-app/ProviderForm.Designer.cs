namespace SideCar.App
{
    partial class ProviderForm
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
            btnCreateSideCarService = new Button();
            btnBroadcastToClient = new Button();
            panel1 = new Panel();
            status = new Label();
            txtStatus = new TextBox();
            btnClearLogs = new Button();
            panel1.SuspendLayout();
            SuspendLayout();
            // 
            // btnCreateSideCarService
            // 
            btnCreateSideCarService.Location = new Point(77, 42);
            btnCreateSideCarService.Margin = new Padding(5, 6, 5, 6);
            btnCreateSideCarService.Name = "btnCreateSideCarService";
            btnCreateSideCarService.Size = new Size(357, 46);
            btnCreateSideCarService.TabIndex = 0;
            btnCreateSideCarService.Text = "Create SideCar Service";
            btnCreateSideCarService.UseVisualStyleBackColor = true;
            btnCreateSideCarService.Click += btnCreateSideCarServicel_Click;
            // 
            // btnBroadcastToClient
            // 
            btnBroadcastToClient.Enabled = false;
            btnBroadcastToClient.Location = new Point(77, 100);
            btnBroadcastToClient.Margin = new Padding(5, 6, 5, 6);
            btnBroadcastToClient.Name = "btnBroadcastToClient";
            btnBroadcastToClient.Size = new Size(357, 46);
            btnBroadcastToClient.TabIndex = 2;
            btnBroadcastToClient.Text = "Broadcast To Connected Client(s)";
            btnBroadcastToClient.UseVisualStyleBackColor = true;
            btnBroadcastToClient.Click += btnBroadcastToClient_Click;
            // 
            // panel1
            // 
            panel1.Controls.Add(status);
            panel1.Controls.Add(btnCreateSideCarService);
            panel1.Dock = DockStyle.Top;
            panel1.Location = new Point(0, 0);
            panel1.Margin = new Padding(5, 6, 5, 6);
            panel1.Name = "panel1";
            panel1.Size = new Size(1263, 258);
            panel1.TabIndex = 5;
            // 
            // status
            // 
            status.AutoSize = true;
            status.Location = new Point(1222, 10);
            status.Name = "status";
            status.Size = new Size(34, 30);
            status.TabIndex = 4;
            status.Text = "v2";
            // 
            // txtStatus
            // 
            txtStatus.Dock = DockStyle.Fill;
            txtStatus.Location = new Point(0, 258);
            txtStatus.Margin = new Padding(5, 6, 5, 6);
            txtStatus.Multiline = true;
            txtStatus.Name = "txtStatus";
            txtStatus.ReadOnly = true;
            txtStatus.Size = new Size(1263, 732);
            txtStatus.TabIndex = 6;
            // 
            // clearLogs
            // 
            btnClearLogs.Location = new Point(77, 166);
            btnClearLogs.Name = "clearLogs";
            btnClearLogs.Size = new Size(357, 46);
            btnClearLogs.TabIndex = 7;
            btnClearLogs.Text = "Clear Logs";
            btnClearLogs.UseVisualStyleBackColor = true;
            btnClearLogs.Click += clearLogs_Click;
            // 
            // ProviderForm
            // 
            AutoScaleDimensions = new SizeF(12F, 30F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1263, 990);
            Controls.Add(btnClearLogs);
            Controls.Add(btnBroadcastToClient);
            Controls.Add(txtStatus);
            Controls.Add(panel1);
            Margin = new Padding(5, 6, 5, 6);
            Name = "ProviderForm";
            Text = "SideCar Management";
            panel1.ResumeLayout(false);
            panel1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button btnCreateSideCarService;
        private Button btnBroadcastToClient;
        private Panel panel1;
        private TextBox txtStatus;
        private Label status;
        private Button btnClearLogs;
    }
}